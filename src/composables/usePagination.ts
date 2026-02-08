import { ref, computed, type Ref, watch } from "vue";

export function usePagination<T>(data: Ref<T[]>, itemsPerPage: number = 8) {
  const currentPage = ref(1);

  const totalPages = computed(() =>
    Math.ceil(data.value.length / itemsPerPage),
  );

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.value.slice(start, end);
  });

  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  const toPage = (page: number) => {
    currentPage.value = page;
  };

  watch(data, () => {
    currentPage.value = 1;
  });

  return {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage,
    toPage,
  };
}
