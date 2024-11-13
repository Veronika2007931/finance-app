export const formatMonth = (monthNumber) => {
    const months = [
      "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
      "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ];
    return months[parseInt(monthNumber, 10) - 1];
  };
  