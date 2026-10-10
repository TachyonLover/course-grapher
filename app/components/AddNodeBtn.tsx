type AddNodeBtnProps = {
  onClick: () => void;
};

export default function AddNodeBtn({ onClick }: AddNodeBtnProps) {
  return (
    <button className="add-node-btn" onClick={onClick}>
    +
    </button>
  );
}

