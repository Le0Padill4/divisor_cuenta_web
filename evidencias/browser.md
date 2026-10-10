# Validación real de navegador

2026-10-09, America/Guayaquil. Codex interactuó con el navegador integrado
en http://127.0.0.1:5178/ (servidor Vite local).

| Acción ejecutada | Observación |
|---|---|
| 100 / 4 / 10, exacto, Calcular | 27.50 visible |
| Después del éxito: 50 / 0 / 0, Calcular | Debe haber al menos una persona; desaparece 27.50 y no aparece resultado |
| abc / 4 / 0, Calcular | Monto inválido; no resultado |
| 10 / 3 / 0, arriba, Calcular | 4.00 visible |

Árboles observados: browser-normal.txt, browser-cero.txt, browser-invalido.txt,
browser-arriba.txt. Captura: pantalla-27-50.jpg.

Se comprobó visualmente el formulario de escritorio y su resultado. La captura conserva
el contexto completo. El navegador perdió una pestaña temporal; se creó otra en el mismo
navegador y se repitió el caso normal para guardar evidencia. Eso es trabajo autónomo del
agente, no una nueva iteración del estudiante.

No se hizo una observación física en móvil ni se simuló pérdida de conexión.
La ausencia de servicios/red/persistencia se revisó en el código y los controles SOLID.
jsdom y las pruebas automatizadas constituyen evidencia distinta de este navegador real.

