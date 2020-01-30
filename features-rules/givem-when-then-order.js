class KeywordOrderRule {
    static keywordOrder(feature) {
        var errors = [];
        if (feature && feature.children) {
            for (let scenario of feature.children) {
                let whenFound = false;
                let thenFound = false;
                for (let step of scenario.steps) {
                    if (step.keyword === 'Given ') {
                        if (whenFound || thenFound) {
                            errors.push(KeywordOrderRule.createError(step));
                        }
                    }
                    if (step.keyword === 'When ') {
                        if (thenFound) {
                            errors.push(KeywordOrderRule.createError(step));
                        }
                        whenFound = true;
                    }
                    if (step.keyword === 'Then ') {
                        thenFound = true;
                    }
                }
            }
        }
        return errors;
    }
    static createError(step) {
        return {
            message: `Step "'${step.keyword}${step.text}'" - Keyword used in the wrong order [Given - When -Then]: ${step.keyword}`,
            rule: KeywordOrderRule.ruleName,
            line: step.location.line
        };
    }
}
KeywordOrderRule.ruleName = 'given-when-then-order';
module.exports = {
    name: KeywordOrderRule.ruleName,
    run: KeywordOrderRule.keywordOrder
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZW0td2hlbi10aGVuLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2l2ZW0td2hlbi10aGVuLW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sZ0JBQWdCO0lBR2IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPO1FBQ2hDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQy9CLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDckMsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO2dCQUMvQixJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBRS9CLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTt3QkFDN0IsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFOzRCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNqRDtxQkFDRjtvQkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO3dCQUM1QixJQUFJLFNBQVMsRUFBRTs0QkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNqRDt3QkFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDO3FCQUNsQjtvQkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO3dCQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDO3FCQUNsQjtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQzVCLE9BQU87WUFDTCxPQUFPLEVBQUUsVUFBVSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLDhEQUE4RCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZILElBQUksRUFBSyxnQkFBZ0IsQ0FBQyxRQUFRO1lBQ2xDLElBQUksRUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7U0FDNUIsQ0FBQztJQUNKLENBQUM7O0FBdkNzQix5QkFBUSxHQUFHLHVCQUF1QixDQUFDO0FBMEM1RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFFBQVE7SUFDL0IsR0FBRyxFQUFFLGdCQUFnQixDQUFDLFlBQVk7Q0FDbkMsQ0FBQyJ9