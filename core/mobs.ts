namespace mobs {
    /**
     * Queries information about a given target
     * @param target a target selector that determines the entity you're querying
     */
    //%
    export function queryTarget(target: TargetSelector): QueryTargetResult[] {
        return _queryTargetCore(target) as QueryTargetResult[];
    }
}