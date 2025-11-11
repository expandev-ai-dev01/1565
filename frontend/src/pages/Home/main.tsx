export const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Bem-vindo ao Italiano</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experimente a autêntica culinária italiana em um ambiente acolhedor e elegante.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">🍝</div>
          <h3 className="text-xl font-bold mb-2">Massas Artesanais</h3>
          <p className="text-gray-600">
            Massas frescas feitas diariamente com ingredientes selecionados.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">🍕</div>
          <h3 className="text-xl font-bold mb-2">Pizzas Tradicionais</h3>
          <p className="text-gray-600">
            Pizzas assadas em forno a lenha com receitas tradicionais italianas.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">🍷</div>
          <h3 className="text-xl font-bold mb-2">Vinhos Selecionados</h3>
          <p className="text-gray-600">
            Uma carta de vinhos cuidadosamente selecionada para harmonizar com seus pratos.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Visite-nos</h2>
        <p className="text-lg text-gray-600 mb-8">
          Estamos localizados no coração da cidade, prontos para recebê-lo.
        </p>
        <a
          href="/contato"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Entre em Contato
        </a>
      </section>
    </div>
  );
};

export default HomePage;
