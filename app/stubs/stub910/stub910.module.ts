import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub910Component} from "./stub910.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub910Component
        }])
    ],
    declarations: [
        Stub910Component
    ]
})
export class Stub910Module {

}
