async function cargarPeliculas() {
                        try {
                            const res = await fetch("/peliculas");
                            const peliculas = await res.json();

                            const contenedor = document.getElementById("peliculas");

                            peliculas.forEach(peli => {
                                const div = document.createElement("div");
                                div.innerHTML =
                                    `<div class="card">
                                    <h2>${peli.titulo} (${peli.año})</h2>
                                     <p>${peli.genero}</p>
                                     <img src="${peli.imagen_url}" width="200">
                                     <p>${peli.texto}</p>
                                     </div>`;

                                contenedor.appendChild(div);
                            });
                        } catch (err) {
                            console.error("Error cargando películas:", err);
                        }
                    }
                    // Llamamos a la función
                    cargarPeliculas();


async function cargarVideojuegos() {
                        try {
                            const res = await fetch("/videojuegos");
                            const peliculas = await res.json();

                            const contenedor = document.getElementById("videojuegos");

                            peliculas.forEach(game => {
                                const div = document.createElement("div");
                                div.innerHTML =
                                    `<div class="card">
                                    <h2>${game.titulo} (${game.año})</h2>
                                     <p>${game.genero}</p>
                                     <img src="${game.imagen_url}" width="200">
                                     <p>${game.texto}</p>
                                     </div>`;
                                contenedor.appendChild(div);
                            });
                        } catch (err) {
                            console.error("Error cargando videojuegos:", err);
                        }
                    }
                    // Llamamos a la función
                    cargarVideojuegos();

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
