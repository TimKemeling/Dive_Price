from django.test import TestCase
from django.core import mail
from .django_email_server import send_user , send_email, validate_email
# Create your tests here.

class mailTest(TestCase):
    test_email = 'tmkcrypto@gmail.com'

    def test_email_valid(self):
        """
        validate_email works with valid email
        """
        response = validate_email(self.test_email)

        self.assertTrue(response)

    def test_email_not_valid(self):
        """
        validate_email returns false with dummy email
        """
        dummy_email = 'info@example.com'
        response = validate_email(dummy_email)

        self.assertFalse(response)

    def test_mail_with_valid_email(self):
        """
        send_user() sends an email after verifying its validity
        won't send actual email due to django settings, but works in shell on 25/05/2023
        """

        subject = "sendmaildjangotest"
        message = "This was sent as a test from django to verify the working of the send email function"

        send_user(subject, message, self.test_email)

        self.assertEqual(len(mail.outbox), 1)  
        assert mail.outbox[0].subject == subject
        assert mail.outbox[0].body == message
        assert mail.outbox[0].from_email == 'timkemeling@gmail.com'
        assert mail.outbox[0].to == [self.test_email]


    def test_mail_with_known_email(self):
        """
        send_email() sends an email 
        won't send actual email due to django settings, but works in shell on 25/05/2023
        
        """

        subject = "sendmaildjangotest"
        message = "This was sent as a test from django to verify the working of the send email function"

        send_email(subject, message, self.test_email)

        self.assertEqual(len(mail.outbox), 1)    
        assert mail.outbox[0].subject == subject
        assert mail.outbox[0].body == message
        assert mail.outbox[0].from_email == 'timkemeling@gmail.com'
        assert mail.outbox[0].to == [self.test_email]

    
