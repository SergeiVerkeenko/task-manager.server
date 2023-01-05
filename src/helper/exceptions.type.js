const ExceptionType = {
    GET_USER_NOT_FOUND: { id: 1, message: 'getUserById: this user is not defind.' },
    GET_USERS_NOT_FOUND: { id: 2, message: 'getUser: this user is not defind.' },
    PUT_USER_NOT_FOUND: { id: 3, message: 'updateUsers: this user is not defind.' },
    DELETE_USER_NOT_FOUND: { id: 4, message: 'deleteUsers: this user is not defind.' },
    PATCH_USER_NOT_FOUND: { id: 5, message: 'patchUsers: this user is not defind.' },
    USER_ID_NOT_FOUND: { id: 6, message: 'This id is empty.' },
    USER_ID_NOT_VALID: { id: 7, message: 'This id is not valid.' },
    USER_NAME_NOT_FOUND: { id: 8, message: 'This name is empty.' },
    USER_SURNAME_NOT_FOUND: { id: 9, message: 'This surname is empty.' },
    USER_EMAIL_NOT_FOUND: { id: 10, message: 'This email is empty.' },
    
    TASK_NOT_FOUND: { id: 11, message: 'getTaskById: this task is not defind.' },
    GET_TASKS_NOT_FOUND: { id: 12, message: 'getTask: this task is not defind.' },
    PUT_TASK_NOT_FOUND: { id: 13, message: 'updateTasks: this task is not defind.' },
    DELETE_TASK_NOT_FOUND: { id: 14, message: 'deleteTasks: this task is not defind.' },
    PATCH_TASK_NOT_FOUND: { id: 15, message: 'patchTasks: this task is not defind.' },
    CREATE_TASK_NOT_FOUND: { id: 16, message: 'createTasks: this task is not defind.' },
    
}

module.exports = ExceptionType;