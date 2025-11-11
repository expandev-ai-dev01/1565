export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Italiano</h3>
            <p className="text-gray-400 text-sm">
              Restaurante italiano autêntico com os melhores pratos da culinária italiana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Horário de Funcionamento</h3>
            <p className="text-gray-400 text-sm">
              Segunda a Sexta: 11h - 23h
              <br />
              Sábado e Domingo: 12h - 00h
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400 text-sm">
              Telefone: (11) 1234-5678
              <br />
              Email: contato@italiano.com.br
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Italiano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
