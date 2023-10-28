const server = Bun.serve({
  port: 3000,
  fetch(request) {
    console.log(import.meta.dir + "//icons//loading.gif");
    const path = new URL(request.url).pathname;
    console.log(path);
    switch (path) {
      case "/":
        return new Response(Bun.file(import.meta.dir + "//index.html"));
        break;
      case "/cat":
        return new Response(Bun.file(import.meta.dir + "//cat.html"));
        break;
      case "/_ico/loading":
        return new Response(Bun.file(import.meta.dir + "//icons//loading.gif"));
        break;
    }
    if (path.startsWith("/md/")) {
      return new Response(
        Bun.file(import.meta.dir + "//md//" + path.replace("/md/", ""))
      );
    }
    if (path.startsWith("/isos/")) {
      return new Response(
        Bun.file(import.meta.dir + "//isos//" + path.replace("/isos/", ""))
      );
    }
  },
});
//
