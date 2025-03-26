export default {
    namespaced: true,
    state() {
        return {
            lessonsList: [
                { id: 1, name: "Математика" },
                { id: 2, name: "Фізика" },
                { id: 3, name: "Хімія" },
                { id: 4, name: "Біологія" },
                { id: 5, name: "Історія" },
                { id: 6, name: "Географія" },
                { id: 7, name: "Література" },
                { id: 8, name: "Музика" },
                { id: 9, name: "Малювання" },
                { id: 10, name: "Фізкультура" },
            ],
        }
    },
    getters: {
        getLessonsList: (state) => state.lessonsList,
        getLessonsNamesById: (state) => (idList) => {
            return state.lessonsList
                .filter(lesson => idList.includes(String(lesson.id)))
                .map(lesson => lesson.name);
        }
    },
    mutations: {

    },
    actions: {

    }
}
