import { defineNuxtPlugin } from "#app";
interface To {
  hash: string
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to: To, from: object, savedPosition: string) => {
    if (savedPosition) {
      return savedPosition;
    }

    const findEl = async (hash: string, x = 0) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (x > 0) {
            return resolve(document.querySelector("#app"));
          }
          setTimeout(() => {
            resolve(findEl(hash, 1));
          }, 300);
        })
      );
    };

    if (to.hash) {
      const el: any = await findEl(to.hash);

      if ("scrollBehavior" in document.documentElement.style) {
        console.log("hash path hit scroll to");
        return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }
    
    return { 
      left: 0, 
      top: 0, 
      behaviour: "smooth" 
    };
  };
})