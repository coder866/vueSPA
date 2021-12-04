export default function middlewarePipeline(context, middleware, index) {
    const nextMiddleware = middleware[index]
    if (!nextMiddleware) {
        return context.next
    }
    return () => {
        console.log('PIPELINE-INDEX=', index)
        nextMiddleware({
            ...context,
            next: middlewarePipeline(context, middleware, index + 1),
        })
    }
}
