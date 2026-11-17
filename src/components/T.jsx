// Renders copy and marks any [bracketed] text as "to confirm".
const T = ({ children, as: Tag = 'span', className }) => {
  const text = String(children ?? '');
  const parts = text.split(/(\[[^\]]*\])/g).filter(Boolean);
  return (
    <Tag className={className}>
      {parts.map((p, i) =>
        p.startsWith('[') && p.endsWith(']')
          ? <span key={i} className="tbc" title="To confirm before going live">{p}</span>
          : p
      )}
    </Tag>
  );
};

export default T;
