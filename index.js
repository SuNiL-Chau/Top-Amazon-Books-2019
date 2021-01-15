$(document).ready(function () {
  $("#booklist").DataTable({
    ajax: {
      url: "./Data/bestsellers with categories.json",
      dataSrc: "",
    },
    columns: [
      { title: "Name", data: "Name" },
      { title: "Author", data: "Author" },
      { title: "User Rating", data: "User Rating" },
      { title: "Reviews", data: "Reviews" },
      { title: "Price", data: "Price" },
      { title: "Year", data: "Year" },
      { title: "Genre", data: "Genre" },
    ],
  });
});
