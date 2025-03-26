export default {
    namespaced: true,
    state() {
        return {
            teachersList: [
                { id: 1, name: "Олександр Іванович" },
                { id: 2, name: "Марія Петрівна" },
                { id: 3, name: "Іван Миколайович" },
                { id: 4, name: "Світлана Олександрівна" },
                { id: 5, name: "Петро Васильович" },
                { id: 6, name: "Олена Сергіївна" },
                { id: 7, name: "Володимир Андрійович" },
            ],
        }
    },
    getters: {
        getTeachersList: (state) => state.teachersList,
        getTeachersNamesById: (state) => (idList) => {
            return idList.flatMap(id =>
                state.teachersList
                    .filter(teacher => String(teacher.id) === String(id))
                    .map(teacher => teacher.name)
            );
        }
    },
    mutations: {

    },
    actions: {

    }
}
