import api from "./api";

import { PaginatedRounetArgs, RounetPaginatedData } from "../types";

export const getAllRounetData = async (): Promise<RounetPaginatedData> => {
	const { data } = await api.get<RounetPaginatedData>("/rouanet");
	return data;
};

export const getPaginatedRounetData = async ({
	page,
	limit,
}: PaginatedRounetArgs): Promise<RounetPaginatedData> => {
	const { data } = await api.get<RounetPaginatedData>(`/rouanet?page=${page}&limit=${limit}`);
	return data;
};
