window.writerChatEmbedConfig = {
  token: 'ET4u2Ab0PaO4neJyt32241VnrysboLaZeFuj4in_RgY',
  baseUrl: 'https://embed.writer.com/chat/',
};

var p =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.94737 12.1369H11.8421V10.5187H3.94737V12.1369ZM3.94737 8.9004H16.0526V7.28214H3.94737V8.9004ZM3.94737 5.66389H16.0526V4.04563H3.94737V5.66389ZM0 20V1.95027C0 1.40527 0.184211 0.943981 0.552632 0.566389C0.921053 0.188796 1.37114 0 1.90289 0H18.0971C18.6289 0 19.0789 0.188796 19.4474 0.566389C19.8158 0.943981 20 1.40527 20 1.95027V14.2323C20 14.7773 19.8158 15.2386 19.4474 15.6161C19.0789 15.9937 18.6289 16.1825 18.0971 16.1825H3.72474L0 20ZM3.05263 14.5643H18.0971C18.1782 14.5643 18.2524 14.5297 18.3197 14.4604C18.3873 14.3914 18.4211 14.3153 18.4211 14.2323V1.95027C18.4211 1.8672 18.3873 1.79114 18.3197 1.72209C18.2524 1.65287 18.1782 1.61825 18.0971 1.61825H1.90289C1.82184 1.61825 1.74763 1.65287 1.68026 1.72209C1.61272 1.79114 1.57895 1.8672 1.57895 1.95027V16.0582L3.05263 14.5643Z" fill="#5551FF"/></svg>',
  a =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_2504_32839)"><g clip-path="url(#clip1_2504_32839)"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#5551FF"/></g></g><defs><clipPath id="clip0_2504_32839"><rect width="24" height="24" fill="white"/></clipPath><clipPath id="clip1_2504_32839"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>';
function c({ embedId: i = 'chat', openIcon: l = p, closedIcon: s = a }) {
  return function () {
    let o = window.writerEmbedConfig;
    if (o && o.token) {
      let d = o.baseUrl || `http://localhost:4200/${i}/`;
      if (!document.getElementById(`writer-${i}-bubble-button`)) {
        let n = document.createElement('div');
        (n.id = `writer-${i}-bubble-button`),
          (n.style.cssText =
            'position: fixed; bottom: 1rem; right: 1rem; width: 50px; height: 50px; border-radius: 25px; background-color: #E4E9FF; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px; cursor: pointer; z-index: 2147483647; transition: all 0.2s ease-in-out 0s; left: unset; transform: scale(1); :hover {transform: scale(1.1);}');
        let e = document.createElement('div');
        (e.style.cssText =
          'display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 2147483647;'),
          (e.innerHTML = l),
          n.appendChild(e),
          document.body.appendChild(n),
          n.addEventListener('click', function () {
            var r = document.getElementById(`writer-${i}-bubble-window`);
            if (r)
              r.style.display === 'none'
                ? ((r.style.display = 'block'), (e.innerHTML = s))
                : ((r.style.display = 'none'), (e.innerHTML = l));
            else {
              let t = document.createElement('iframe');
              (t.allow = 'fullscreen;microphone'),
                (t.title = 'Writer chatbot bubble window'),
                (t.id = `writer-${i}-bubble-window`),
                (t.src = d + o.token),
                (t.style.cssText =
                  'border: none; position: fixed; flex-direction: column; justify-content: space-between; box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px; bottom: 5rem; right: 1rem; width: 420px; max-width: calc(100vw - 2rem); height: 40rem; max-height: calc(-6rem + 100vh);border-radius: 0.75rem; display: flex; z-index: 2147483647; overflow: hidden; left: unset; background-color: white;'),
                document.body.appendChild(t),
                (e.innerHTML = s);
            }
          });
      }
    } else console.error('Config is empty or token is not provided');
  };
}
document.body.onload = c({ embedId: 'chat' });
