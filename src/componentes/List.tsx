type ListProps = {
  itens: string[];
};

function List({ itens }: ListProps) {
  return (
    <>
      <div className={`grid grid-cols-1 gap-4`}>
        {itens.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
}

export default List;
