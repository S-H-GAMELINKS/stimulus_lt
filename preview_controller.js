(() => {
    const application = Stimulus.Application.start()

    application.register("preview", class extends Stimulus.Controller {
        static get targets() {
            return ["input", "preview"]
        }

        checkPreview() {
            this.previewTarget.innerHTML = this.inputTarget.value
        }
    })
})()
