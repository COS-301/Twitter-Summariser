import { handlerPath } from '@libs/handler-resolver';
export const getAllCreators = {
    handler: `${handlerPath(__dirname)}/handler.getAllCreators`,
    events: [
        {
            http: {
                method: 'get',
                path: 'creator/',
            },
        },
    ],
};

export const addCreator = {
    handler: `${handlerPath(__dirname)}/handler.addCreator`,
    events: [
        {
            http: {
                method: 'post',
                path: 'creator',
            },
        },
    ],
};


