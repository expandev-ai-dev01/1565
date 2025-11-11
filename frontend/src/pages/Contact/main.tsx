export const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Entre em Contato</h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Endereço</h3>
              <p className="text-gray-600">
                Rua Exemplo, 123 - Centro
                <br />
                São Paulo, SP - CEP 01234-567
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Telefone</h3>
              <p className="text-gray-600">(11) 1234-5678</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">contato@italiano.com.br</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Horário de Funcionamento</h3>
              <p className="text-gray-600">
                Segunda a Sexta: 11h - 23h
                <br />
                Sábado e Domingo: 12h - 00h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
