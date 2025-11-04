export function generateWelcomeEmail(name: string, activationToken?: string) {
    const subject = "🎉 Welcome to Fivra!";
    const activationLink = activationToken ? `https://fivra.co.uk/activate?token=${activationToken}` : null;
    
    return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px;">
        <table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 32px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                Welcome to Fivra!
              </h1>
              <p style="margin: 12px 0 0 0; color: #94a3b8; font-size: 16px;">
                Your journey starts here
              </p>
            </td>
          </tr>
          
          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 32px;">
              <p style="font-size: 18px; color: #0f172a; margin: 0 0 8px 0; font-weight: 600;">
                Hi ${name},
              </p>
              
              <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 16px 0;">
                Thank you for joining Fivra! We're excited to have you as part of our community.
              </p>
              
              ${activationLink ? `
                <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 16px 0;">
                  To get started and unlock all the features of your account, please verify your email address by clicking the button below:
                </p>
                
                <!-- CTA Button -->
                <div style="text-align: center; margin: 36px 0;">
                  <a href="${activationLink}" 
                     target="_blank" 
                     style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; padding: 16px 48px; border-radius: 10px; text-decoration: none; font-size: 16px; font-weight: 600; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);">
                    Activate Your Account
                  </a>
                </div>
                
                <!-- Alternative Link -->
                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 10px; margin: 24px 0;">
                  <p style="font-size: 14px; color: #64748b; margin: 0 0 8px 0;">
                    Or copy and paste this link into your browser:
                  </p>
                  <p style="font-size: 13px; color: #3b82f6; margin: 0; word-break: break-all; font-family: 'Courier New', monospace;">
                    ${activationLink}
                  </p>
                </div>
                
                <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin: 24px 0 0 0;">
                  This activation link will expire in 24 hours. If you didn't create an account with Fivra, please disregard this email.
                </p>
              ` : `
                <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 16px 0;">
                  Your account is ready to use! Click the button below to get started and explore everything Fivra has to offer.
                </p>
                
                <!-- CTA Button -->
                <div style="text-align: center; margin: 36px 0;">
                  <a href="https://fivra.co.uk/dashboard" 
                     target="_blank" 
                     style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; padding: 16px 48px; border-radius: 10px; text-decoration: none; font-size: 16px; font-weight: 600; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);">
                    Get Started
                  </a>
                </div>
              `}
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="padding: 0 32px;">
              <div style="border-top: 1px solid #e2e8f0;"></div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 32px; text-align: center;">
              <p style="font-size: 14px; color: #64748b; margin: 0 0 16px 0;">
                Need help? Contact us at 
                <a href="mailto:support@fivra.co.uk" style="color: #2563eb; text-decoration: none;">
                  support@fivra.co.uk
                </a>
              </p>
              
              <p style="font-size: 13px; color: #94a3b8; margin: 16px 0 0 0;">
                &copy; ${new Date().getFullYear()} Fivra. All rights reserved.
              </p>
              
              <div style="margin-top: 16px;">
                <a href="https://fivra.co.uk" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Visit Website
                </a>
                <span style="color: #cbd5e1;">|</span>
                <a href="https://fivra.co.uk/privacy" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Privacy Policy
                </a>
                <span style="color: #cbd5e1;">|</span>
                <a href="https://fivra.co.uk/terms" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Terms
                </a>
              </div>
            </td>
          </tr>
          
        </table>
        
        <!-- Email Client Spacing -->
        <div style="height: 40px;"></div>
        
      </div>
    `;
}

  export function generateAccountActivatedEmail(name: string) {
    return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px;">
        <table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          
          <!-- Header with Success Icon -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 32px; text-align: center;">
              <div style="margin-bottom: 16px;">
                <div style="display: inline-block; background: #10b981; width: 64px; height: 64px; border-radius: 50%; text-align: center; line-height: 64px;">
                  <span style="color: #ffffff; font-size: 36px; font-weight: bold;">✓</span>
                </div>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                Account Activated!
              </h1>
              <p style="margin: 12px 0 0 0; color: #94a3b8; font-size: 16px;">
                You're all set to go
              </p>
            </td>
          </tr>
          
          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 32px;">
              <p style="font-size: 18px; color: #0f172a; margin: 0 0 8px 0; font-weight: 600;">
                Hi ${name},
              </p>
              
              <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 16px 0;">
                Great news! Your Fivra account has been successfully activated. You now have full access to all our features and services.
              </p>
              
              <p style="font-size: 16px; color: #475569; line-height: 1.7; margin: 16px 0;">
                Here's what you can do next:
              </p>
              
              <!-- Features List -->
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px 24px; margin: 24px 0; border-radius: 8px;">
                <div style="margin-bottom: 16px;">
                  <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">
                    🎯 Complete Your Profile
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
                    Add your information to personalize your experience
                  </p>
                </div>
                
                <div style="margin-bottom: 16px;">
                  <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">
                    🔍 Explore Features
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
                    Discover everything Fivra has to offer
                  </p>
                </div>
                
                <div>
                  <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">
                    💬 Get Support
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
                    Our team is here to help if you need anything
                  </p>
                </div>
              </div>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 36px 0;">
                <a href="https://fivra.co.uk/dashboard" 
                   target="_blank" 
                   style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; padding: 16px 48px; border-radius: 10px; text-decoration: none; font-size: 16px; font-weight: 600; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);">
                  Go to Dashboard
                </a>
              </div>
              
              <!-- Security Notice -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; margin: 24px 0; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #92400e; line-height: 1.6;">
                  <strong>Security Tip:</strong> Keep your login credentials safe and never share them with anyone. If you notice any suspicious activity, contact us immediately.
                </p>
              </div>
              
              <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin: 24px 0 0 0;">
                Thank you for choosing Fivra. We're excited to have you on board!
              </p>
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="padding: 0 32px;">
              <div style="border-top: 1px solid #e2e8f0;"></div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 32px; text-align: center;">
              <p style="font-size: 14px; color: #64748b; margin: 0 0 16px 0;">
                Questions or need assistance? 
                <a href="mailto:support@fivra.co.uk" style="color: #2563eb; text-decoration: none;">
                  Contact Support
                </a>
              </p>
              
              <p style="font-size: 13px; color: #94a3b8; margin: 16px 0 0 0;">
                &copy; ${new Date().getFullYear()} Fivra. All rights reserved.
              </p>
              
              <div style="margin-top: 16px;">
                <a href="https://fivra.co.uk" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Visit Website
                </a>
                <span style="color: #cbd5e1;">|</span>
                <a href="https://fivra.co.uk/help" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Help Center
                </a>
                <span style="color: #cbd5e1;">|</span>
                <a href="https://fivra.co.uk/privacy" style="color: #2563eb; text-decoration: none; font-size: 13px; margin: 0 12px;">
                  Privacy Policy
                </a>
              </div>
            </td>
          </tr>
          
        </table>
        
        <!-- Email Client Spacing -->
        <div style="height: 40px;"></div>
        
      </div>
    `;
  }