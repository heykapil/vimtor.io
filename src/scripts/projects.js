function projects() {
  return {
    selected: [],
    project(labels) {
      const commaRegex = /\s*,\s*/;
      return {
        ["x-show"]() {
          const allSelected = this.selected.length === 0;
          const matchesLabel = labels.split(commaRegex).some(tag => this.selected.includes(tag));
          return allSelected || matchesLabel;
        },
        ["x-transition:enter-start"]() {
          return "opacity-0";
        },
        ["x-transition:enter-end"]() {
          return "opacity-100";
        },
        ["x-transition:leave-start"]() {
          return "opacity-100";
        },
        ["x-transition:leave-end"]() {
          return "opacity-0";
        }
      };
    },
    label(value) {
      const isSelected = () => this.selected.includes(value);
      const getElement = () => this.$refs[value];

      const toggleSelection = () => {
        if (isSelected()) {
          this.selected = this.selected.filter(x => x !== value);
        } else {
          this.selected.push(value);
        }
      };

      const focusNextLabel = () => {
        const { nextElementSibling } = getElement();
        if (nextElementSibling) {
          nextElementSibling.focus();
        }
      };

      const focusPreviousLabel = () => {
        const { previousElementSibling } = getElement();
        if (previousElementSibling) {
          previousElementSibling.focus();
        }
      };

      return {
        ["x-on:click"]() {
          toggleSelection();
          getElement().blur();
        },
        ["x-on:keydown.enter"]: toggleSelection,
        ["x-on:keydown.arrow-left"]: focusPreviousLabel,
        ["x-on:keydown.arrow-up"]: focusPreviousLabel,
        ["x-on:keydown.arrow-right"]: focusNextLabel,
        ["x-on:keydown.arrow-down"]: focusNextLabel,
        ["x-bind:class"]() {
          return { selected: isSelected() };
        },
        ["x-bind:aria-selected"]() {
          return isSelected() ? "true" : "false";
        }
      };
    }
  };
}
