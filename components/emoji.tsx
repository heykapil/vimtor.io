interface EmojiProps {
  label: string;
  icon: string;
}

const Emoji = ({ label, icon }: EmojiProps) => (
  <span className="inline-block hover:animate-wiggle" role="img" aria-label={label}>
    {icon}
  </span>
);


export default Emoji;