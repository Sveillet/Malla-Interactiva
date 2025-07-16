const cursos = [
  // Ciclo 1 (Rosa Claro)
  { nombre: "Globalización y Realidad Nacional", ciclo: 1, color: "#FADADD" },
  { nombre: "Lenguaje y Comunicación I", ciclo: 1, color: "#FADADD" },
  { nombre: "Ética Cívica", ciclo: 1, color: "#FADADD" },
  { nombre: "Metodología de Investigación", ciclo: 1, color: "#FADADD" },
  { nombre: "Desarrollo y Personal Social", ciclo: 1, color: "#FADADD" },
  { nombre: "Matemática Básica", ciclo: 1, color: "#FADADD" },

  // Ciclo 2 (Morado Claro)
  { nombre: "Economía y Empresa", ciclo: 2, color: "#E6CCFF" },
  { nombre: "Lenguaje y Comunicación II", ciclo: 2, color: "#E6CCFF" },
  { nombre: "Estadística Básica para los Negocios", ciclo: 2, color: "#E6CCFF" },
  { nombre: "Procesos Sociales y Políticos", ciclo: 2, color: "#E6CCFF" },
  { nombre: "Temas de Filosofía", ciclo: 2, color: "#E6CCFF" },
  { nombre: "Matemática Aplicada a los Negocios", ciclo: 2, color: "#E6CCFF" },

  // Ciclo 3 (Azul Claro)
  { nombre: "Introduction to International Business", ciclo: 3, prerequisitos: ["Economía y Empresa"], color: "#ADD8E6" },
  { nombre: "Estadística para la Gestión Empresarial I", ciclo: 3, prerequisitos: ["Estadística Básica para los Negocios"], color: "#ADD8E6" },
  { nombre: "Relaciones Internacionales / International Relations", ciclo: 3, prerequisitos: ["Procesos Sociales y Políticos"], color: "#ADD8E6" },
  { nombre: "Cross-Cultural in Business", ciclo: 3, prerequisitos: ["Procesos Sociales y Políticos"], color: "#ADD8E6" },
  { nombre: "Matemática para la Gestión de Negocios", ciclo: 3, prerequisitos: ["Matemática Aplicada a los Negocios"], color: "#ADD8E6" },
  { nombre: "Contabilidad General", ciclo: 3, prerequisitos: ["Matemática Aplicada a los Negocios"], color: "#ADD8E6" },

  // Ciclo 4 (Amarillo Tenue) y Electivos (Verde Claro)
  { nombre: "Regulation of International Business Transactions", ciclo: 4, prerequisitos: ["Introduction to International Business"], color: "#FFFACD" },
  { nombre: "Microeconomía / Microeconomics", ciclo: 4, prerequisitos: ["Introduction to International Business"], color: "#FFFACD" },
  { nombre: "International Business Workshop I", ciclo: 4, prerequisitos: ["Lenguaje y Comunicación II"], color: "#90EE90" },
  { nombre: "Estadística para la Gestión Empresarial II", ciclo: 4, prerequisitos: ["Estadística para la Gestión Empresarial I"], color: "#FFFACD" },
  { nombre: "Marketing Internacional, Estudio de Mercado y Estrategias de Venta / International Marketing, Market Research and Sales Strategies", ciclo: 4, prerequisitos: ["Estadística para la Gestión Empresarial I"], color: "#FFFACD" },
  { nombre: "Economic Integration Processes", ciclo: 4, prerequisitos: ["Relaciones Internacionales / International Relations"], color: "#FFFACD" },
  { nombre: "Costos y Presupuestos", ciclo: 4, prerequisitos: ["Contabilidad General"], color: "#FFFACD" },

  // Ciclo 5 (Naranja Claro) y Electivos (Verde Claro)
  { nombre: "Exports, Imports and Customs", ciclo: 5, prerequisitos: ["Regulation of International Business Transactions"], color: "#FFDAB9" },
  { nombre: "Macroeconomía / Macroenomics", ciclo: 5, prerequisitos: ["Microeconomía / Microeconomics"], color: "#FFDAB9" },
  { nombre: "International Business Workshop II", ciclo: 5, prerequisitos: ["Introduction to International Business"], color: "#90EE90" },
  { nombre: "Métodos Cuantitativos para la Investigación en Negocios Internacionales", ciclo: 5, prerequisitos: ["Estadística para la Gestión Empresarial II"], color: "#FFDAB9" },
  { nombre: "Inteligencia en los Negocios y Big Data", ciclo: 5, prerequisitos: ["Estadística para la Gestión Empresarial II", "Marketing Internacional, Estudio de Mercado y Estrategias de Venta / International Marketing, Market Research and Sales Strategies"], color: "#FFDAB9" },
  { nombre: "Inteligencia de Mercados Internacionales/ International Market Intelligence", ciclo: 5, prerequisitos: ["Marketing Internacional, Estudio de Mercado y Estrategias de Venta / International Marketing, Market Research and Sales Strategies"], color: "#FFDAB9" },
  { nombre: "Emprendimiento de Negocios Globales y Digitales", ciclo: 5, prerequisitos: ["Marketing Internacional, Estudio de Mercado y Estrategias de Venta / International Marketing, Market Research and Sales Strategies"], color: "#FFDAB9" },

  // Ciclo 6 (Celeste) y Electivos (Verde Claro)
  { nombre: "International Logístics I", ciclo: 6, prerequisitos: ["Exports, Imports and Customs"], color: "#B2EBF2" },
  { nombre: "Development and Innovation of International Services", ciclo: 6, prerequisitos: ["Macroeconomía / Macroenomics"], color: "#B2EBF2" },
  { nombre: "Teoría del Comercio Internacional / Theory of International Trade", ciclo: 6, prerequisitos: ["Macroeconomía / Macroenomics"], color: "#B2EBF2" },
  { nombre: "International Business Strategies and Sustainability", ciclo: 6, prerequisitos: ["Macroeconomía / Macroenomics"], color: "#B2EBF2" },
  { nombre: "Data Analytics Aplicados a los Negocios Internacionales", ciclo: 6, prerequisitos: ["Inteligencia en los Negocios y Big Data"], color: "#90EE90" },
  { nombre: "Comportamiento de Mercados Internacionales", ciclo: 6, prerequisitos: ["Inteligencia de Mercados Internacionales/ International Market Intelligence"], color: "#B2EBF2" },
  { nombre: "Taller de Inteligencia de Mercados Internacionales", ciclo: 6, prerequisitos: ["Inteligencia de Mercados Internacionales/ International Market Intelligence"], color: "#90EE90" },
  { nombre: "Cooperación Internacional para el Desarrollo Sostenible", ciclo: 6, prerequisitos: ["Economic Integration Processes"], color: "#90EE90" },
  { nombre: "Finanzas Empresariales I", ciclo: 6, prerequisitos: ["Matemática para la Gestión de Negocios"], color: "#B2EBF2" },

  // Ciclo 7 (Rojo Claro) y Electivos (Verde Claro)
  { nombre: "International Logistics II", ciclo: 7, prerequisitos: ["International Logístics I"], color: "#FF9999" },
  { nombre: "Taller de Liderazgo y Habilidades Gerenciales", ciclo: 7, prerequisitos: ["Teoría del Comercio Internacional / Theory of International Trade"], color: "#90EE90" },
  { nombre: "Global Standards Requirements", ciclo: 7, prerequisitos: ["Development and Innovation of International Services", "International Business Strategies and Sustainability"], color: "#FF9999" },
  { nombre: "Estrategias de Producción y Precios Internacionales / Production Strategies and International Price", ciclo: 7, prerequisitos: ["International Business Strategies and Sustainability"], color: "#FF9999" },
  { nombre: "Innovation and International Product Development", ciclo: 7, prerequisitos: ["Comportamiento de Mercados Internacionales"], color: "#FF9999" },
  { nombre: "Estrategias Aplicadas para la Negociación Internacional / Applied Strategies to International Negotiation", ciclo: 7, prerequisitos: ["Cross-Cultural in Business", "Economic Integration Processes"], color: "#FF9999" },
  { nombre: "Finanzas Empresariales II", ciclo: 7, prerequisitos: ["Finanzas Empresariales I"], color: "#FF9999" },

  // Ciclo 8 (Beige) y Electivos (Verde Claro)
  { nombre: "Global Supply Chain Management", ciclo: 8, prerequisitos: ["International Logistics II"], color: "#F5F5DC" },
  { nombre: "Gestión de Operaciones Globales I", ciclo: 8, prerequisitos: ["International Logistics II"], color: "#90EE90" },
  { nombre: "Etica y Sostenibilidad Empresarial / Ethics and Business Sustainability", ciclo: 8, prerequisitos: ["Teoría del Comercio Internacional / Theory of International Trade"], color: "#F5F5DC" },
  { nombre: "Circularidad en Negocios Internacionales", ciclo: 8, prerequisitos: ["Global Standards Requirements"], color: "#90EE90" },
  { nombre: "Taller Textil y Confecciones", ciclo: 8, prerequisitos: ["Estrategias de Producción y Precios Internacionales / Production Strategies and International Price"], color: "#90EE90" },
  { nombre: "Taller de Minería e Hidrocarburos", ciclo: 8, prerequisitos: ["Estrategias de Producción y Precios Internacionales / Production Strategies and International Price"], color: "#90EE90" },
  { nombre: "Seminario Integrador de Negocios Internacionales / International Business Research", ciclo: 8, prerequisitos: ["Métodos Cuantitativos para la Investigación en Negocios Internacionales", "Estrategias de Producción y Precios Internacionales / Production Strategies and International Price"], color: "#F5F5DC" },
  { nombre: "Commercial Promotion, Sales and International Comunication", ciclo: 8, prerequisitos: ["Innovation and International Product Development"], color: "#F5F5DC" },
  { nombre: "Innovación y Diseño de Productos Internacionales / Innovation and International Product Design", ciclo: 8, prerequisitos: ["Innovation and International Product Development"], color: "#90EE90" },
  { nombre: "Diplomacia y Protocolo/ Diplomacy and Protocol", ciclo: 8, prerequisitos: ["Economic Integration Processes"], color: "#90EE90" },
  { nombre: "Doing Global Business and Foreign Direct Investment", ciclo: 8, prerequisitos: ["Estrategias Aplicadas para la Negociación Internacional / Applied Strategies to International Negotiation"], color: "#F5F5DC" },
  { nombre: "Global Leadership", ciclo: 8, prerequisitos: ["Estrategias Aplicadas para la Negociación Internacional / Applied Strategies to International Negotiation"], color: "#90EE90" },
  { nombre: "International Trade Finance I", ciclo: 8, prerequisitos: ["Finanzas Empresariales II"], color: "#F5F5DC" },
  { nombre: "Mercado de Valores / Stock Market", ciclo: 8, prerequisitos: ["Finanzas Empresariales II"], color: "#90EE90" },

  // Ciclo 9 (Plomo) y Electivos (Verde Claro)
  { nombre: "Taller de Logistica Internacional", ciclo: 9, prerequisitos: ["Global Supply Chain Management"], color: "#D3D3D3" },
  { nombre: "Global Human Resources", ciclo: 9, prerequisitos: ["Etica y Sostenibilidad Empresarial / Ethics and Business Sustainability"], color: "#D3D3D3" },
  { nombre: "Strategic Alliances", ciclo: 9, prerequisitos: ["Global Standards Requirements"], color: "#D3D3D3" },
  { nombre: "Taller de Agronegocios", ciclo: 9, prerequisitos: ["Estrategias de Producción y Precios Internacionales / Production Strategies and International Price"], color: "#90EE90" },
  { nombre: "Taller de Pesca y Acuicultura", ciclo: 9, prerequisitos: ["Estrategias de Producción y Precios Internacionales / Production Strategies and International Price"], color: "#90EE90" },
  { nombre: "Seminario de Investigación en Negocios Internacionales I / International Business Research I", ciclo: 9, prerequisitos: ["Seminario Integrador de Negocios Internacionales / International Business Research"], color: "#D3D3D3" },
  { nombre: "Desarrollo de Proyectos Sostenibles Internacionales / Development of International Sustainable Projects", ciclo: 9, prerequisitos: ["Commercial Promotion, Sales and International Comunication"], color: "#D3D3D3" },
  { nombre: "Oportunidades de Importación y Exportación", ciclo: 9, prerequisitos: ["Commercial Promotion, Sales and International Comunication"], color: "#90EE90" },
  { nombre: "Política de Comercio Exterior Comparada", ciclo: 9, prerequisitos: ["Doing Global Business and Foreign Direct Investment"], color: "#D3D3D3" },
  { nombre: "International Trade Finance II", ciclo: 9, prerequisitos: ["International Trade Finance I"], color: "#D3D3D3" },
  { nombre: "Evaluación Financiera de Proyectos de Inversión", ciclo: 9, prerequisitos: ["International Trade Finance I"], color: "#90EE90" },
  { nombre: "Advance International Finance", ciclo: 9, prerequisitos: ["International Trade Finance I"], color: "#90EE90" },

  // Ciclo 10 (Crema) y Electivos (Verde Claro)
  { nombre: "Global Logistics Management", ciclo: 10, prerequisitos: ["Global Supply Chain Management"], color: "#FFFDD0" },
  { nombre: "Gestión de Operaciones Globales II", ciclo: 10, prerequisitos: ["Global Supply Chain Management"], color: "#90EE90" },
  { nombre: "Dirección Estratégica Internacional / International Strategic Management", ciclo: 10, prerequisitos: ["Strategic Alliances"], color: "#FFFDD0" },
  { nombre: "Seminario de Investigación en Negocios Internacionales II / International Business Research II", ciclo: 10, prerequisitos: ["Seminario de Investigación en Negocios Internacionales I / International Business Research I"], color: "#FFFDD0" },
  { nombre: "Integración Económica Comercial Asia Pacífico", ciclo: 10, prerequisitos: ["Doing Global Business and Foreign Direct Investment"], color: "#90EE90" },
  { nombre: "International Corporate Finance", ciclo: 10, prerequisitos: ["International Trade Finance II"], color: "#FFFDD0" },
  { nombre: "Gestión del Riesgo en Proyectos Internacionales", ciclo: 10, prerequisitos: ["International Trade Finance I"], color: "#90EE90" },
];
// Guardar cursos completados en localStorage
document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");
  const cursosPorCiclo = {};
  cursos.forEach((curso) => {
    if (!cursosPorCiclo[curso.ciclo]) cursosPorCiclo[curso.ciclo] = [];
    cursosPorCiclo[curso.ciclo].push(curso);
  });

  const cursosCompletados = JSON.parse(localStorage.getItem("cursosCompletados") || "[]");

  for (const ciclo in cursosPorCiclo) {
    const columna = document.createElement("div");
    columna.className = "column";
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    cursosPorCiclo[ciclo].forEach((curso) => {
      const cursoDiv = document.createElement("div");
      cursoDiv.className = "course";
      cursoDiv.textContent = curso.nombre;
      cursoDiv.style.backgroundColor = curso.color;

      const requisitosCumplidos =
        !curso.prerequisitos ||
        curso.prerequisitos.every((req) => cursosCompletados.includes(req));

      if (!requisitosCumplidos) {
        cursoDiv.classList.add("locked");
      }

      if (cursosCompletados.includes(curso.nombre)) {
        cursoDiv.classList.add("completed");
      }

      cursoDiv.addEventListener("click", () => {
        if (!cursoDiv.classList.contains("locked")) {
          if (cursosCompletados.includes(curso.nombre)) {
            cursosCompletados.splice(cursosCompletados.indexOf(curso.nombre), 1);
            cursoDiv.classList.remove("completed");
          } else {
            cursosCompletados.push(curso.nombre);
            cursoDiv.classList.add("completed");
          }
          localStorage.setItem("cursosCompletados", JSON.stringify(cursosCompletados));
          location.reload();
        }
      });

      columna.appendChild(cursoDiv);
    });

    malla.appendChild(columna);
  }
});
