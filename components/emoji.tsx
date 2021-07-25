interface EmojiProps {
  label: string;
  icon: string;
}

const Emoji = ({ label, icon }: EmojiProps) => (
  <span className="emoji" aria-label={label}>
    {icon}
  </span>
);


export default Emoji;