class MensagemView extends View {

 
  update(model: string): void {
    // propriedade setter do Dom que renderiza um template html recebido
    this._elemento.innerHTML = this.template(model);
  }

  template(model: string): string {
    return `
     <p class= "alert alert-info">${model}</p>
    `;
  }
}