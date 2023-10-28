const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const path = new URL(request.url).pathname;
    console.log(path);
    switch (path) {
      case "/":
        return new Response(Bun.file(import.meta.dir + "//index.html"));
      case "/cat":
        return new Response(Bun.file(import.meta.dir + "//cat.html"));
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
//live_YZOzVxqS1Tll4RZJMPvR7cWEIbDUAxfamv5m2sqS240ivcQgeekziNHc9bGeBH6m
