const filterDropDownItems = [
  {
    name: "Min Experience",
    key: "minExp",
    type: "dropdown",
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    name: "Job Role",
    key: "jobRole",
    type: "dropdown",
    options: ["frontend", "backend", "ios", "android", "tech lead"],
  },
  {
    name: "Min Salary",
    key: "minJdSalary",
    type: "dropdown",
    options: [
      10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
      100,
    ],
  },
];

export default filterDropDownItems;

const isFilterAvailable = (filters) => {
  for (let keys in filters) {
    if (filters[keys]) {
      return true;
    }
  }

  return false;
};

export const getFilterJobList = (data, filters) => {
  const isFilterTrue = isFilterAvailable(filters);
  console.log("isFilterTrue", isFilterTrue);
  if (isFilterTrue) {
    return data.filter((item) => {
      if (filters.minJdSalary && filters.minExp && filters.jobRole) {
        return (
          item.minExp >= filters.minExp &&
          item.minJdSalary >= filters.minJdSalary &&
          item.jobRole === filters.jobRole &&
          item.minExp &&
          item.minJdSalary &&
          item.jobRole
        );
      } else if (filters.minJdSalary && filters.jobRole) {
        // minJds & role
        return (
          item.minJdSalary >= filters.minJdSalary &&
          item.jobRole === filters.jobRole &&
          item.minJdSalary &&
          item.jobRole
        );
      } else if (filters.minJdSalary && filters.minExp) {
        // minJds & minExp
        return (
          item.minExp >= filters.minExp &&
          item.minJdSalary >= filters.minJdSalary &&
          item.minExp &&
          item.minJdSalary
        );
      } else if (filters.minExp && filters.jobRole) {
        // minExp && jdRole
        return (
          item.minExp >= filters.minExp &&
          item.jobRole === filters.jobRole &&
          item.minExp &&
          item.jobRole
        );
      } else if (filters.minExp) {
        return item.minExp >= filters.minExp && item.minExp;
      } else if (filters.jobRole) {
        return item.jobRole === filters.jobRole && item.jobRole;
      } else if (filters.minJdSalary) {
        return item.minJdSalary >= filters.minJdSalary && item.minJdSalary;
      }
    });
  }

  return data;
};
