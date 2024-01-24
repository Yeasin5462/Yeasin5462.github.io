document.addEventListener('DOMContentLoaded', () => {
    // Function to open a modal with more details
    function openModal(content) {
        let modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full';
        modal.id = 'modal';

        let modalContent = `
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div class="mt-3 text-center">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">${content.title}</h3>
                    <div class="mt-2 px-7 py-3">
                        <p class="text-sm text-gray-500">${content.description}</p>
                    </div>
                    <div class="items-center px-4 py-3">
                        <button id="okBtn" class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-5/6 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.innerHTML = modalContent;
        document.body.appendChild(modal);

        // Event to close the modal
        document.getElementById('okBtn').addEventListener('click', () => {
            document.getElementById('modal').remove();
        });
    }

    // Add event listeners to car images
    document.querySelectorAll('.car-image').forEach(item => {
        item.addEventListener('click', () => {
            openModal({
                title: 'Car Details',
                description: 'This is a great car with excellent features. Check out our latest models!'
            });
        });
    });

    // Add event listeners to pricing plans
    document.querySelectorAll('.pricing-plan').forEach(item => {
        item.addEventListener('click', () => {
            openModal({
                title: 'Pricing Plan Details',
                description: 'Explore our competitive pricing plans tailored for your needs.'
            });
        });
    });
});

