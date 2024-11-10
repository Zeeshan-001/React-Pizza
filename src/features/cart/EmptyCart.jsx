import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Zurück zum Menü</LinkButton>

      <p className="mt-7 font-semibold">
        Ihr Warenkorb ist noch leer. Fangen Sie an, Pizzen hinzuzufügen.
      </p>
    </div>
  );
}

export default EmptyCart;
