function projects() {
  return {
    selectedLabels: [],
    isSearchEmpty: false,
    emptyMessage: -1,
    project(labels) {
      return {
        ["x-show"]() {
          const noneSelected = this.selectedLabels.length === 0;
          const matchesLabels = this.selectedLabels.every((label) => labels.includes(label));
          return noneSelected || matchesLabels;
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
        },
      };
    },
    label(value) {
      const isSelected = () => this.selectedLabels.includes(value);
      const getElement = () => this.$refs[value];

      const toggleSelection = () => {
        if (isSelected()) {
          this.selectedLabels = this.selectedLabels.filter((x) => x !== value);
        } else {
          this.selectedLabels.push(value);
        }

        this.isSearchEmpty = false;
        setTimeout(() => {
          const visibleProjects = [...document.querySelectorAll(".project-item")].filter((x) => x.style.display !== "none");
          const isCurrentlyEmpty = visibleProjects.length === 0;
          if (isCurrentlyEmpty) {
            this.emptyMessage += 1;
            this.isSearchEmpty = true;
          }
        }, 200);
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
        },
      };
    },
    emptyPlaceholder: {
      ["x-show"]() {
        return this.isSearchEmpty;
      },
    },
  };
}
