import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub879Component} from "./stub879.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub879Component
        }])
    ],
    declarations: [
        Stub879Component
    ]
})
export class Stub879Module {

}
