import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Pots:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo"
            id="title"
          />

          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteudo"
          ></textarea>
        </div>

        <input type="button" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
