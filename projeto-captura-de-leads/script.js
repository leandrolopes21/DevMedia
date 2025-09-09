class LeadCapture {
    constructor() {
        this.form = document.getElementById('leadForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.successMessage = document.getElementById('successMessage');
        this.errorMessage = document.getElementById('errorMessage');
        this.newLeadBtn = document.getElementById('newLeadBtn');
        
        this.supabaseConfig = {
            endpoint: 'https://kgsswckrqumyejbzspkv.supabase.co/rest/v1/Leads',
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnc3N3Y2tycXVteWVqYnpzcGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODU5NzQsImV4cCI6MjA2OTY2MTk3NH0.uuNjYfbEwJ6epHdWeq8jd80lcjB0mxrgu5ts3W8iJv8'
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.newLeadBtn.addEventListener('click', this.resetForm.bind(this));

        document.getElementById('nome').addEventListener('blur', this.validateNome.bind(this));
        document.getElementById('nome').addEventListener('input', this.clearError.bind(this, 'nome'));

        document.getElementById('email').addEventListener('blur', this.validateEmail.bind(this));
        document.getElementById('email').addEventListener('input', this.clearError.bind(this, 'email'));

        // Remova eventos de input/blur do DDD que eram para <input>
        document.getElementById('ddd').addEventListener('change', this.validateDDD.bind(this));

        document.getElementById('telefone').addEventListener('input', this.formatTelefone.bind(this));
        document.getElementById('telefone').addEventListener('blur', this.validateTelefone.bind(this));

        document.getElementById('ddd').addEventListener('change', this.clearError.bind(this, 'ddd'));
        document.getElementById('telefone').addEventListener('input', this.clearError.bind(this, 'telefone'));
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        this.setLoadingState(true);
        this.hideMessages();
        
        try {
            const formData = this.getFormData();
            await this.submitToSupabase(formData);
            this.showSuccess();
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            this.showError(error.message);
        } finally {
            this.setLoadingState(false);
        }
    }
    
    validateForm() {
        let isValid = true;
        
        if (!this.validateNome()) isValid = false;
        if (!this.validateEmail()) isValid = false;
        if (!this.validateDDD()) isValid = false;
        if (!this.validateTelefone()) isValid = false;
        
        return isValid;
    }
    
    validateNome() {
        const nome = document.getElementById('nome').value.trim();
        const input = document.getElementById('nome');
        
        if (!nome) {
            this.showFieldError('nome', 'Nome é obrigatório');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        if (nome.length < 2) {
            this.showFieldError('nome', 'Nome deve ter pelo menos 2 caracteres');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        input.classList.remove('error');
        input.classList.add('success');
        this.hideFieldError('nome');
        return true;
    }

    validateEmail() {
        const email = document.getElementById('email').value.trim();
        const input = document.getElementById('email');

        if (!email) {
            this.showFieldError('email', 'Email é obrigatório');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.showFieldError('email', 'Email inválido');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }

        input.classList.remove('error');
        input.classList.add('success');
        this.hideFieldError('email');
        return true;
    }
    
    validateDDD() {
        const ddd = document.getElementById('ddd').value;
        const input = document.getElementById('ddd');

        if (!ddd) {
            this.showFieldError('ddd', 'DDD é obrigatório');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }

        // Como só há opções válidas, não precisa validar o formato
        input.classList.remove('error');
        input.classList.add('success');
        this.hideFieldError('ddd');
        return true;
    }
    
    validateTelefone() {
        const telefone = document.getElementById('telefone').value.trim();
        const input = document.getElementById('telefone');
        
        if (!telefone) {
            this.showFieldError('telefone', 'Telefone é obrigatório');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        if (telefone.length < 8 || telefone.length > 9) {
            this.showFieldError('telefone', 'Telefone deve ter 8 ou 9 dígitos');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        if (!/^\d+$/.test(telefone)) {
            this.showFieldError('telefone', 'Telefone deve conter apenas números');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        input.classList.remove('error');
        input.classList.add('success');
        this.hideFieldError('telefone');
        return true;
    }
    
    formatDDD(event) {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 2) value = value.slice(0, 2);
        event.target.value = value;
    }
    
    formatTelefone(event) {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 9) value = value.slice(0, 9);
        event.target.value = value;
    }
    
    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    hideFieldError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        errorElement.classList.remove('show');
    }
    
    clearError(fieldName) {
        this.hideFieldError(fieldName);
        const input = document.getElementById(fieldName);
        input.classList.remove('error');
    }
    
    getFormData() {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const ddd = document.getElementById('ddd').value.trim();
        const telefoneNumero = document.getElementById('telefone').value.trim();
        
        return {
            nome: nome,
            email: email,
            telefone: `(${ddd}) ${telefoneNumero}`
        };
    }
    
    async submitToSupabase(data) {
        const response = await fetch(this.supabaseConfig.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.supabaseConfig.apiKey}`,
                'apikey': this.supabaseConfig.apiKey,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            console.error('Erro da API:', response.status, errorData);
            
            let errorMessage = 'Erro interno do servidor';
            
            try {
                const parsedError = JSON.parse(errorData);
                errorMessage = parsedError.message || parsedError.hint || 'Erro ao processar solicitação';
            } catch (e) {
                if (response.status === 401) {
                    errorMessage = 'Erro de autenticação com o servidor';
                } else if (response.status === 400) {
                    errorMessage = 'Dados enviados são inválidos';
                } else if (response.status >= 500) {
                    errorMessage = 'Servidor temporariamente indisponível';
                }
            }
            
            throw new Error(errorMessage);
        }
        
        return response;
    }
    
    setLoadingState(loading) {
        this.submitBtn.disabled = loading;
        this.submitBtn.classList.toggle('loading', loading);
    }
    
    showSuccess() {
        this.form.style.display = 'none';
        this.successMessage.classList.add('show');
    }
    
    showError(message) {
        const errorText = document.getElementById('errorText');
        errorText.textContent = message;
        this.errorMessage.classList.add('show');
        
        setTimeout(() => {
            this.hideMessages();
        }, 5000);
    }
    
    hideMessages() {
        this.errorMessage.classList.remove('show');
    }
    
    resetForm() {
        // Reset form
        this.form.reset();
        
        // Remove all validation classes
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
        
        // Hide all error messages
        const errorMessages = this.form.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.classList.remove('show');
        });
        
        // Show form and hide success message
        this.form.style.display = 'flex';
        this.successMessage.classList.remove('show');
        this.hideMessages();
        
        // Focus on first field
        document.getElementById('nome').focus();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LeadCapture();
});