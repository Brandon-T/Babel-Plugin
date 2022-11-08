function createVisitor(babel) {
    const Types = babel.types;
    
    let visitor = {
        FunctionDeclaration: {
            enter: function(path) {
                path.insertAfter(
                    Types.callExpression(
                        Types.identifier("$"), 
                        [path.node.id]
                    )
                )

                // path.replaceWithMultiple(
                //     [path.node,
                //     Types.callExpression(
                //         Types.identifier("$"),
                //         [path.node.id]
                //     )]
                // )
            }
        }
    }
    return visitor;
}


module.exports = function(babel) {
    
    console.log("LOADED\n");

    return {
        name: "JSPlugin",
        visitor: createVisitor(babel)
    };
};