# Secury Dashboard

Secury is a robust encryption and security application designed to ensure data privacy and access management. It features data encryption (Caesar Cipher, AES) and implements advanced Identity and Access Management (IAM) techniques, including Role-Based Access Control (RBAC) and Access Control Lists (ACL), making it an ideal solution for secure environments.

## Features

- Responsive design
- Material design components
- Customizable and easy to use
- Multiple chart libraries
- Form validation
- Authentication pages
- **Password Validation**: Real-time feedback for password strength, ensuring:
  - Minimum of 6 characters.
  - At least one uppercase letter.
  - At least one special symbol.
- **Email Uniqueness Check**: Prevents duplicate registrations by verifying email addresses against the Firestore database.
- **Secure Password Storage**: Passwords are hashed using **SHA-256** before being stored in the database.
- **Pending Registrations**: New users are added to a "waiting" collection for further processing or approval.
- **Toast Notifications**: Provides user-friendly feedback using **Toastr.js** for errors, success messages, and warnings.

## Tech Stack

- **Firebase Firestore**: For database storage and real-time operations.
- **JavaScript (ES Modules)**: For client-side functionality.
- **CryptoJS**: For secure password hashing.
- **Toastr.js**: For displaying non-intrusive notifications.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/FirasKahlaoui/secury.
    ```

2. Navigate to the project directory:

    ```bash
    cd secury
    ```

3. Open `dashboard.html` in your preferred web browser.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add your feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Create a pull request.

## Contact

For any questions or feedback, please contact us at [kahlaouifiras2017@gmail.com](mailto:kahlaouifiras2017@gmail.com).
