import React, {createContext, useContext, useState} from "react";
import {ToDo} from "./ToDo.tsx";

/**
 * Represents a filter to append on a list of to do list items.
 */
interface Filter {
    /**
     * If the filter accepts the given value.
     *
     * @param value The value to check.
     * @return {@code true} if the filter accepts, {@code false} otherwise.
     */
    accepts: (value: ToDo) => boolean;
}

/**
 * Represents a context, which enables to use a filter list with change methods.
 */
interface FilterContext {

    // The list of filters.
    filterList: Filter[];

    /**
     * Adds a filter to the list of enabled filters.
     *
     * @param func The filter to add.
     */
    addFilter: (func: (item: ToDo) => boolean) => void;

    /**
     * Removes a filter from the filter list.
     *
     * @param filter The filter to remove.
     */
    removeFilter: (filter: Filter) => void;
}

// The filter context that is used in the main Application.
const filterContext = createContext<FilterContext>({} as FilterContext);

/**
 * Props interface for the FilterContextProvider.
 *
 * @see FilterContextProvider
 */
interface FilterContextProviderProps {
    // The children of the FilterContextProvider DOM Element.
    children: React.ReactNode
}

/**
 * A provider for the filterContext that allows to use the list of filters in the whole application
 * with the {@code useFilter} hook.
 *
 * @param children The children of the Provider.
 */
export const FilterContextProvider : React.FC<FilterContextProviderProps>
    = ({ children }: FilterContextProviderProps) => {

    // The list of filters.
    const [filterList, setFilterList] = useState<Filter[]>([]);

    /**
     * Adds a filter to the filter list.
     *
     * @param filter The new filter.
     */
    function addFilter(filter: (item: ToDo) => boolean) {
        setFilterList([...filterList, { accepts: filter }]);
    }

    /**
     * Removes a filter from the filter list.
     *
     * @param filter The filter to remove.
     */
    function removeFilter(filter: Filter) {
        setFilterList(filterList.filter((item) => item !== filter));
    }

    return <filterContext.Provider value={{
        filterList: filterList,
        addFilter: addFilter,
        removeFilter: removeFilter,
    }}>
        { children }
    </filterContext.Provider>
}

/**
 * A hook to use The filter List context inside a FilterContextProvider.
 */
export const useFilter = () => useContext(filterContext)