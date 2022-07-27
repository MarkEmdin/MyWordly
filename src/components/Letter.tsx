type Props = { letter: string; color: string };
function Letter({ letter, color }: Props) {
  return (
    <div>
      <button type="button" className={color}>
        {letter}
      </button>
    </div>
  );
}

export default Letter;
