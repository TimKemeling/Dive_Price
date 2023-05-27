from django.core.mail import send_mail
from django.conf import settings
import requests
from ..dive_price_DJ.config import email_check_API_key
	
api_key = email_check_API_key
api_url = "https://emailvalidation.abstractapi.com/v1/?api_key=" + api_key


# check if email is valid using abstract API response
def is_valid_email(data):
    if data['is_valid_format']['value'] and data['is_mx_found']['value'] and data['is_smtp_valid']['value']:
        if not data['is_catchall_email']['value'] and not data['is_role_email']['value'] and not data['is_disposable_email']['value']:
            return True
    return False

# sends request to abstract API and uses is_valid_email() to check validity
def validate_email(email):
    response = requests.get(api_url+ "&email=" + email)
    is_valid = is_valid_email(response.json())
    return is_valid

# sends email to validated user email. validation trough validate_email()
def send_user(subject, message, recipient):
    is_a_valid_email = True #validate_email(recipient) #only turn on when not testing, max 100 api calls/month
    if is_a_valid_email:
        send_mail(
                subject=subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[recipient])
    else:
        print('not a valid email')
    
# sends email without checking validity, used for known emails
def send_email(subject, message, recipient):
        send_mail(
                subject=subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[recipient])
