import React, { useMemo } from "react";

interface PaginationInterface {
	totalPages: number;

	siblingCount: number;
	currentPage: number;
}

const range = (start: number, end: number) => {
	let length = end - start + 1;

	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
	totalPages,
	siblingCount = 1,
	currentPage,
}: PaginationInterface) => {
	const paginationRange = useMemo(() => {
		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPages) {
			return range(1, totalPages);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPages;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, "...", totalPages];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPages - rightItemCount + 1, totalPages);
			return [firstPageIndex, "...", ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
		}
	}, [totalPages, siblingCount, currentPage]);

	return paginationRange;
};
