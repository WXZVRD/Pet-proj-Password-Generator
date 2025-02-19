export const LSService = {
    saveData: (data) => {
        let dataFromStorage = JSON.parse(localStorage.getItem('passwordHistory')) || [];

        dataFromStorage.unshift(data);

        if (dataFromStorage.length > 5) {
            dataFromStorage.pop();
        }

        localStorage.setItem('passwordHistory', JSON.stringify(dataFromStorage));
    },

    getHistory: () => {
        const savedHistory = JSON.parse(localStorage.getItem('passwordHistory')) || [];
        return savedHistory.slice(0, 5);
    },

    removeData: () => {
        localStorage.removeItem('passwordHistory')
    }
}