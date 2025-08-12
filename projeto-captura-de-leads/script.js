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
        
        // Input validations
        document.getElementById('nome').addEventListener('blur', this.validateNome.bind(this));
        document.getElementById('nome').addEventListener('input', this.clearError.bind(this, 'nome'));
        
        document.getElementById('ddd').addEventListener('input', this.formatDDD.bind(this));
        document.getElementById('ddd').addEventListener('blur', this.validateDDD.bind(this));
        
        document.getElementById('telefone').addEventListener('input', this.formatTelefone.bind(this));
        document.getElementById('telefone').addEventListener('blur', this.validateTelefone.bind(this));
        
        // Clear errors on input
        document.getElementById('ddd').addEventListener('input', this.clearError.bind(this, 'ddd'));
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
    
    validateDDD() {
        const ddd = document.getElementById('ddd').value.trim();
        const input = document.getElementById('ddd');
        
        if (!ddd) {
            this.showFieldError('ddd', 'DDD é obrigatório');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        if (ddd.length !== 2 || !/^\d{2}$/.test(ddd)) {
            this.showFieldError('ddd', 'DDD deve ter 2 dígitos');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
        const validDDDs = [
            '11', '12', '13', '14', '15', '16', '17', '18', '19', // SP
            '21', '22', '24', // RJ
            '27', '28', // ES
            '31', '32', '33', '34', '35', '37', '38', // MG
            '41', '42', '43', '44', '45', '46', // PR
            '47', '48', '49', // SC
            '51', '53', '54', '55', // RS
            '61', // DF
            '62', '64', // GO
            '63', // TO
            '65', '66', // MT
            '67', // MS
            '68', // AC
            '69', // RO
            '71', '73', '74', '75', '77', // BA
            '79', // SE
            '81', '87', // PE
            '82', // AL
            '83', // PB
            '84', // RN
            '85', '88', // CE
            '86', '89', // PI
            '91', '93', '94', // PA
            '92', '97', // AM
            '95', // RR
            '96', // AP
            '98', '99' // MA
        ];
        
        if (!validDDDs.includes(ddd)) {
            this.showFieldError('ddd', 'DDD inválido');
            input.classList.add('error');
            input.classList.remove('success');
            return false;
        }
        
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
        const ddd = document.getElementById('ddd').value.trim();
        const telefoneNumero = document.getElementById('telefone').value.trim();
        
        return {
            nome: nome,
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