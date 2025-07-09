import { ms_meetings } from "../../shared/api/providers";

const URI = "/ms/v1/participant"

const getByHostId = async (id) => {
    const response = await ms_meetings.get(`${URI}/by-host-id/${id}`);
    return response.data;
};

export default getByHostId;