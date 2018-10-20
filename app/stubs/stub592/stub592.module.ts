import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub592Component} from "./stub592.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub592Component
        }])
    ],
    declarations: [
        Stub592Component
    ]
})
export class Stub592Module {

}
