import { Server, Model } from "miragejs";

export function makeServer() {
  let server = new Server({
    models: {
      todo: Model,
    },

    seeds(server) {
      server.create("todo", { message: "Aprendendo mirage" });
      server.create("todo", { message: "Integrando mirage" });
    },

    routes() {
      this.get("/todos", (schema) => {
        return schema.todos.all();
      });

      this.post("/todos", (schema, request) => {
        let attributes = JSON.parse(request.requestBody);
        return schema.todos.create(attributes);
      });

      this.delete("/todos/:id", (schema, request) => {
        schema.todos.find(request.params.id).destroy();
      });
    },
  });

  return server;
}
