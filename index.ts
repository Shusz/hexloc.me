const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const path = new URL(request.url).pathname;
    switch (path) {
      case "/":
        return new Response(Bun.file(import.meta.dir + "//index.html"));
        break;
      case "/cat":
        return new Response(Bun.file(import.meta.dir + "//cat.html"));
        break;
    }
    if (path.startsWith("/md/")) {
      return new Response(
        Bun.file(import.meta.dir + "//md//" + path.replace("/md/", ""))
      );
    }
  },
});
//
