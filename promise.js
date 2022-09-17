const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (input) => {
   return new Promise((resolve) => {
      const hasilSetelahMenonton = [];
      promiseTheaterIXX().then((data) => {
         hasilSetelahMenonton.push(...data);
         promiseTheaterVGC().then((data) => {
            hasilSetelahMenonton.push(...data);
            if (input === "marah") {
               const marah = hasilSetelahMenonton.filter(
                  (item) => item.hasil === "marah"
               );
               resolve(marah.length);
            } else if (input === "tidak marah") {
               const tidakMarah = hasilSetelahMenonton.filter(
                  (item) => item.hasil === "tidak marah"
               );
               resolve(tidakMarah.length);
            }
         });
      });
   });
};

module.exports = {
   promiseOutput,
};
