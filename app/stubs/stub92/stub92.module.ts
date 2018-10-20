import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub92Component} from "./stub92.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub92Component
        }])
    ],
    declarations: [
        Stub92Component
    ]
})
export class Stub92Module {

}
